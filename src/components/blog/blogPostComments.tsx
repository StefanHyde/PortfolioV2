'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { addComment, addReply } from '@/app/api/wordPress/service';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2';

interface Comment {
  id: string;
  content: string;
  date: string;
  status?: string;
  parentId?: string;
  author?: { node?: { name?: string } } | null;
  replies?: { nodes: Comment[] };
}

interface CommentsProps {
  postSlug: string;
  initialComments: Comment[];
  locale: string;
}

interface CommentFormData {
  name: string;
  email: string;
  content: string;
  rgpd: boolean;
}

interface ReplyFormData extends CommentFormData {
  parentId: string;
}

export default function Comments({
  postSlug,
  initialComments,
  locale,
}: CommentsProps) {
  const t = useTranslations('Blog.postComments');
  const [comments, setComments] = useState<Comment[]>(
    initialComments?.filter(Boolean) || [],
  );
  const [isLoading, setIsLoading] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CommentFormData>({
    defaultValues: { name: '', email: '', content: '', rgpd: false },
    mode: 'onChange',
  });

  const {
    register: registerReply,
    handleSubmit: handleSubmitReply,
    reset: resetReply,
    formState: { errors: replyErrors, isValid: isReplyValid },
  } = useForm<ReplyFormData>({
    defaultValues: { name: '', email: '', content: '', rgpd: false },
    mode: 'onChange',
  });

  const onSubmit = async (data: CommentFormData) => {
    setIsLoading(true);
    const toastId = toast.loading(t('envoi-du-commentaire-en-cours'), {
      duration: Infinity,
    });

    try {
      const result = await addComment(
        postSlug,
        data.name,
        data.content,
        data.email,
        locale,
      );
      if (result?.success) {
        if (result.comment?.status === 'APPROVE') {
          setComments((prev) => [result.comment, ...prev]);
        }
        toast.success(
          t(
            'votre-commentaire-a-bien-ete-ajoute-il-sera-publie-apres-validation',
          ),
          {
            id: toastId,
            duration: 5000,
            style: { color: '#fff', background: '#2BBB6E' },
          },
        );
        reset();
      } else {
        toast.error(
          t('une-erreur-est-survenue-lors-de-l-ajout-du-commentaire'),
          {
            id: toastId,
            duration: 4000,
            style: { background: '#D5474C', color: '#fff' },
          },
        );
      }
    } catch {
      toast.error(t('une-erreur-est-survenue-lors-de-l-ajout-du-commentaire'), {
        id: toastId,
        duration: 4000,
        style: { background: '#D5474C', color: '#fff' },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmitReply = async (data: ReplyFormData) => {
    setIsLoading(true);
    const toastId = toast.loading(t('envoi-de-la-reponse-en-cours'), {
      duration: Infinity,
    });

    try {
      const result = await addReply(
        postSlug,
        data.parentId,
        data.name,
        data.content,
        data.email,
        locale,
      );
      if (result?.success) {
        if (result.comment?.status === 'APPROVE') {
          setComments((prev) =>
            prev.map((comment) => {
              if (comment.id === data.parentId) {
                return {
                  ...comment,
                  replies: {
                    nodes: [
                      ...(comment.replies?.nodes || []),
                      { ...result.comment, replies: { nodes: [] } },
                    ],
                  },
                };
              }
              return comment;
            }),
          );
        }
        toast.success(
          t(
            'votre-reponse-a-bien-ete-ajoutee-elle-sera-publiee-apres-validation',
          ),
          {
            id: toastId,
            duration: 5000,
            style: { color: '#fff', background: '#2BBB6E' },
          },
        );
        resetReply();
        setReplyingTo(null);
      } else {
        toast.error(
          t('une-erreur-est-survenue-lors-de-l-ajout-de-la-reponse'),
          {
            id: toastId,
            duration: 4000,
            style: { background: '#D5474C', color: '#fff' },
          },
        );
      }
    } catch {
      toast.error(t('une-erreur-est-survenue-lors-de-l-ajout-de-la-reponse'), {
        id: toastId,
        duration: 4000,
        style: { background: '#D5474C', color: '#fff' },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getAuthorName = (comment: Comment | null) => {
    if (!comment) return 'Anonyme';
    return comment.author?.node?.name || 'Anonyme';
  };

  const CommentForm = ({ parentId }: { parentId?: string }) => (
    <form
      onSubmit={
        parentId ? handleSubmitReply(onSubmitReply) : handleSubmit(onSubmit)
      }
      className="font-montserrat"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="block" htmlFor={`name-${parentId || 'main'}`}>
          <span className="text-dark-800 dark:text-almost-white text-sm">
            {t('votre-nom')}
          </span>
          <input
            type="text"
            id={`name-${parentId || 'main'}`}
            {...(parentId
              ? registerReply('name', { required: t('le-nom-est-obligatoire') })
              : register('name', { required: t('le-nom-est-obligatoire') }))}
            className="border-dark-300 focus:border-primary-500 text-dark-900 mt-1 block w-full rounded-md border p-1.5 text-sm transition duration-200 ease-in-out focus:shadow-md focus:ring-1 focus:ring-purple-500 focus:outline-hidden"
            disabled={isLoading}
          />
          {(parentId ? replyErrors : errors).name && (
            <p className="text-primary-500 pt-1 text-xs">
              {(parentId ? replyErrors : errors).name?.message}
            </p>
          )}
        </label>
        <label className="block" htmlFor={`email-${parentId || 'main'}`}>
          <span className="text-dark-800 dark:text-almost-white text-sm">
            {t('votre-adresse-email')}
          </span>
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <input
                type="email"
                id={`email-${parentId || 'main'}`}
                {...(parentId
                  ? registerReply('email', {
                      required: "L'adresse email est obligatoire",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t('adresse-email-invalide'),
                      },
                    })
                  : register('email', {
                      required: "L'adresse email est obligatoire",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t('adresse-email-invalide'),
                      },
                    }))}
                className="border-dark-300 focus:border-primary-500 text-dark-900 mt-1 block w-full rounded-md border p-1.5 text-sm transition duration-200 ease-in-out focus:shadow-md focus:ring-1 focus:ring-purple-500 focus:outline-hidden"
                disabled={isLoading}
              />
              {(parentId ? replyErrors : errors).email && (
                <p className="text-primary-500 pt-1 text-xs">
                  {(parentId ? replyErrors : errors).email?.message}
                </p>
              )}
            </div>
          </div>
        </label>
      </div>
      <label className="mt-6 block" htmlFor={`comment-${parentId || 'main'}`}>
        <span className="text-dark-800 dark:text-almost-white text-sm">
          {parentId ? t('votre-reponse') : t('votre-commentaire')}
        </span>
        <textarea
          id={`comment-${parentId || 'main'}`}
          rows={parentId ? 3 : 6}
          {...(parentId
            ? registerReply('content', {
                required: t('le-commentaire-est-obligatoire'),
              })
            : register('content', {
                required: t('le-commentaire-est-obligatoire'),
              }))}
          className="border-dark-300 focus:border-primary-500 text-dark-900 mt-1 block w-full rounded-md border p-1.5 text-sm transition duration-200 ease-in-out focus:shadow-md focus:ring-1 focus:ring-purple-500 focus:outline-hidden"
          disabled={isLoading}
        />
        {(parentId ? replyErrors : errors).content && (
          <p className="text-primary-500 pt-1 text-xs">
            {(parentId ? replyErrors : errors).content?.message}
          </p>
        )}
      </label>
      {parentId && (
        <input type="hidden" {...registerReply('parentId')} value={parentId} />
      )}

      <div className="mt-4 flex items-center gap-2">
        <input
          type="checkbox"
          id={`rgpd-${parentId || 'main'}`}
          {...(parentId
            ? registerReply('rgpd', {
                required: t('vous-devez-accepter-les-conditions-rgpd'),
              })
            : register('rgpd', {
                required: t('vous-devez-accepter-les-conditions-rgpd'),
              }))}
          className="accent-primary-500 h-4 w-4"
        />
        <label
          htmlFor={`rgpd-${parentId || 'main'}`}
          className="text-dark-900 dark:text-almost-white text-xs font-light"
        >
          <Link href="/rgpd" className="hover:underline">
            {t(
              'j-accepte-les-conditions-generales-et-la-politique-de-confidentialite',
            )}
          </Link>
        </label>
      </div>
      {(parentId ? replyErrors : errors).rgpd && (
        <p className="text-primary-500 pt-1 text-xs">
          {(parentId ? replyErrors : errors).rgpd?.message}
        </p>
      )}

      {!isLoading && (
        <button
          type="submit"
          disabled={isLoading || !(parentId ? isReplyValid : isValid)}
          className={`submitbtn bg-primary-600 hover:bg-primary-800 to-secondary-500 border-primary-600 hover:border-primary-800 font-montserrat mt-4 flex rounded-md border-2 border-solid px-3 py-1.5 text-left text-xs font-light text-white ease-in-out duration-300${isLoading || !(parentId ? isReplyValid : isValid) ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          {isLoading ? t('envoi') : parentId ? t('repondre') : t('envoyer')}
        </button>
      )}
    </form>
  );

  return (
    <div className="mx-auto w-full space-y-8">
      <h2 className="font-montserrat text-dark-800 dark:text-almost-white mb-6 text-xl font-semibold">
        {/* Filter comments by parentId , to avoid displaying the replies in the comments list */}
        {comments.filter((comment) => !comment.parentId).length}{' '}
        {t('commentaire')}
        {comments.filter((comment) => !comment.parentId).length > 1 ? 's' : ''}
      </h2>

      {/* Comments list */}
      <div className="space-y-6">
        {comments
          .filter((comment) => !comment.parentId)
          .map((comment) => (
            <div key={comment.id} className="space-y-4">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-sm font-semibold">
                    {getAuthorName(comment)}
                  </h3>
                  <time className="text-xs font-thin text-gray-500">
                    {t('le')} {''}
                    {new Date(comment.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </time>
                </div>
                <div
                  className="prose prose-sm dark:prose-invert text-sm"
                  dangerouslySetInnerHTML={{ __html: comment.content }}
                />
                <button
                  onClick={() =>
                    setReplyingTo(replyingTo === comment.id ? null : comment.id)
                  }
                  className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 mt-4 flex items-center gap-2 text-xs"
                >
                  {replyingTo === comment.id ? 'Annuler' : 'Répondre'}
                  <HiOutlineChatBubbleOvalLeftEllipsis />
                </button>
              </div>

              {/* Replies */}
              {comment.replies?.nodes && comment.replies.nodes.length > 0 && (
                <div className="ml-8 space-y-4">
                  {comment.replies.nodes.map((reply) => (
                    <div
                      key={reply.id}
                      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-sm font-semibold">
                          {getAuthorName(reply)}
                        </h3>
                        <time className="text-xs font-thin text-gray-500">
                          {t('le')} {''}
                          {new Date(reply.date).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </time>
                      </div>
                      <div
                        className="prose prose-sm dark:prose-invert text-sm"
                        dangerouslySetInnerHTML={{ __html: reply.content }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Replies form */}
              {replyingTo === comment.id && (
                <div className="ml-8">
                  <CommentForm parentId={comment.id} />
                </div>
              )}
            </div>
          ))}
      </div>

      {/* Formulaire d'ajout de commentaire */}
      <h2 className="font-montserrat text-dark-800 dark:text-almost-white mb-6 text-xl font-semibold">
        {comments.length > 0
          ? t('ajouter-un-commentaire')
          : t('a-toi-d-ajouter-le-premier-commentaire')}
      </h2>
      <CommentForm />
    </div>
  );
}
