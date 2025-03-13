'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { addComment, addReply } from '@/app/api/wordPress/service';
import toast from 'react-hot-toast';

interface Comment {
  id: string;
  content: string;
  date: string;
  status?: string;
  author?: {
    node?: {
      name?: string;
    };
  } | null;
  replies?: {
    nodes: Comment[];
  };
}

interface CommentsProps {
  postSlug: string;
  initialComments: Comment[];
}

interface CommentFormData {
  name: string;
  email: string;
  content: string;
}

interface ReplyFormData extends CommentFormData {
  parentId: string;
}

export default function Comments({ postSlug, initialComments }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>(
    initialComments?.filter(Boolean) || [],
  );
  const [isLoading, setIsLoading] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommentFormData>();

  const {
    register: registerReply,
    handleSubmit: handleSubmitReply,
    reset: resetReply,
    formState: { errors: replyErrors },
  } = useForm<ReplyFormData>();

  const onSubmit = async (data: CommentFormData) => {
    setIsLoading(true);
    const toastId = toast.loading('Envoi du commentaire en cours...', {
      duration: Infinity,
    });

    try {
      const result = await addComment(
        postSlug,
        data.name,
        data.content,
        data.email,
      );
      if (result?.success) {
        if (result.comment?.status === 'APPROVE') {
          setComments((prev) => [result.comment, ...prev]);
        }
        toast.success('Votre commentaire a bien été ajouté', {
          id: toastId,
          duration: 5000,
          style: {
            color: '#fff',
            background: '#2BBB6E',
          },
        });
        reset();
      } else {
        toast.error("Une erreur est survenue lors de l'ajout du commentaire", {
          id: toastId,
          duration: 4000,
          style: {
            background: '#D5474C',
            color: '#fff',
          },
        });
      }
    } catch {
      toast.error("Une erreur est survenue lors de l'ajout du commentaire", {
        id: toastId,
        duration: 4000,
        style: {
          background: '#D5474C',
          color: '#fff',
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmitReply = async (data: ReplyFormData) => {
    setIsLoading(true);
    const toastId = toast.loading('Envoi de la réponse en cours...', {
      duration: Infinity,
    });

    try {
      const result = await addReply(
        postSlug,
        data.parentId,
        data.name,
        data.content,
        data.email,
      );
      if (result?.success) {
        if (result.comment?.status === 'APPROVE') {
          setComments((prev) =>
            prev.map((comment) => {
              if (comment.id === data.parentId) {
                return {
                  ...comment,
                  replies: {
                    nodes: [...(comment.replies?.nodes || []), result.comment],
                  },
                };
              }
              return comment;
            }),
          );
        }
        toast.success('Votre réponse a bien été ajoutée', {
          id: toastId,
          duration: 5000,
          style: {
            color: '#fff',
            background: '#2BBB6E',
          },
        });
        resetReply();
        setReplyingTo(null);
      } else {
        toast.error("Une erreur est survenue lors de l'ajout de la réponse", {
          id: toastId,
          duration: 4000,
          style: {
            background: '#D5474C',
            color: '#fff',
          },
        });
      }
    } catch {
      toast.error("Une erreur est survenue lors de l'ajout de la réponse", {
        id: toastId,
        duration: 4000,
        style: {
          background: '#D5474C',
          color: '#fff',
        },
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
          <span className="text-dark-800 dark:text-almost-white">
            Votre nom
          </span>
          <input
            type="text"
            id={`name-${parentId || 'main'}`}
            {...(parentId ? registerReply('name') : register('name'))}
            className="border-dark-300 focus:border-primary-500 mt-1 block w-full rounded-md border p-2 transition duration-200 ease-in-out focus:ring-1 focus:shadow-md focus:ring-purple-500 focus:outline-hidden"
            disabled={isLoading}
          />
          {(parentId ? replyErrors : errors).name && (
            <p className="text-primary-500 pt-1 text-xs">
              {(parentId ? replyErrors : errors).name?.message}
            </p>
          )}
        </label>
        <label className="block" htmlFor={`email-${parentId || 'main'}`}>
          <span className="text-dark-800 dark:text-almost-white">
            Votre adresse email
          </span>
          <input
            type="email"
            id={`email-${parentId || 'main'}`}
            {...(parentId ? registerReply('email') : register('email'))}
            className="border-dark-300 focus:border-primary-500 mt-1 block w-full rounded-md border p-2 transition duration-200 ease-in-out focus:ring-1 focus:shadow-md focus:ring-purple-500 focus:outline-hidden"
            disabled={isLoading}
          />
          {(parentId ? replyErrors : errors).email && (
            <p className="text-primary-500 pt-1 text-xs">
              {(parentId ? replyErrors : errors).email?.message}
            </p>
          )}
        </label>
      </div>
      <label className="mt-6 block" htmlFor={`comment-${parentId || 'main'}`}>
        <span className="text-dark-800 dark:text-almost-white">
          {parentId ? 'Votre réponse' : 'Votre commentaire'}
        </span>
        <textarea
          id={`comment-${parentId || 'main'}`}
          rows={6}
          {...(parentId ? registerReply('content') : register('content'))}
          className="border-dark-300 focus:border-primary-500 mt-1 block w-full rounded-md border p-2 transition duration-200 ease-in-out focus:ring-1 focus:shadow-md focus:ring-purple-500 focus:outline-hidden"
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

      {!isLoading && (
        <button
          type="submit"
          disabled={isLoading}
          className={`submitbtn bg-primary-600 hover:bg-primary-800 to-secondary-500 border-primary-600 hover:border-primary-800 font-montserrat mt-6 flex rounded-md border-2 border-solid px-4 py-2 text-left text-sm font-light text-white ease-in-out duration-300${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          {isLoading ? 'Envoi...' : parentId ? 'Répondre' : 'Envoyer'}
        </button>
      )}
    </form>
  );

  return (
    <div className="mx-auto w-full space-y-8">
      <h2 className="font-montserrat text-dark-800 dark:text-almost-white mb-6 text-2xl font-semibold md:text-2xl">
        {comments.length} Commentaire{comments.length > 1 ? 's' : ''}
      </h2>

      {/* Liste des commentaires */}
      <div className="space-y-6">
        {comments.filter(Boolean).map((comment) => (
          <div key={comment.id} className="space-y-4">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-semibold">
                  {getAuthorName(comment)}
                </h3>
                <time className="text-xs text-gray-500">
                  le {''}
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
                className="prose prose-sm dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: comment.content }}
              />
              <button
                onClick={() =>
                  setReplyingTo(replyingTo === comment.id ? null : comment.id)
                }
                className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 mt-4 text-sm"
              >
                {replyingTo === comment.id ? 'Annuler' : 'Répondre'}
              </button>
            </div>

            {/* Réponses */}
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
                      <time className="text-xs text-gray-500">
                        le {''}
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
                      className="prose prose-sm dark:prose-invert"
                      dangerouslySetInnerHTML={{ __html: reply.content }}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Formulaire de réponse */}
            {replyingTo === comment.id && (
              <div className="ml-8">
                <CommentForm parentId={comment.id} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Formulaire d'ajout de commentaire */}
      <h2 className="font-montserrat text-dark-800 dark:text-almost-white mb-6 text-2xl font-semibold md:text-2xl">
        Ajouter un commentaire
      </h2>
      <CommentForm />
    </div>
  );
}
