'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

type FormInputs = {
  name: string;
  senderMail: string;
  message: string;
  honeyPot?: string;
  rgpd: boolean;
};

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState,
    formState: { errors },
    trigger,
  } = useForm<FormInputs>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      senderMail: '',
      message: '',
      rgpd: false,
    },
  });

  const { isSubmitting } = formState;

  const onSubmit = async (formData: FormInputs) => {
    if (!isLoading) {
      try {
        setIsLoading(true);
        console.log('Submitting form with data:', {
          ...formData,
          honeyPot: undefined,
        });

        const response = await fetch('/api/sendMail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            senderMail: formData.senderMail,
            message: formData.message,
            honeyPot: formData.honeyPot,
          }),
        });

        const responseData = await response.json();
        console.log('Server response:', {
          status: response.status,
          data: responseData,
        });

        if (response.ok) {
          toast.success(
            'Votre message a bien été envoyé, je vous répondrai dans les plus brefs délais',
          );
          reset();
        } else {
          const errorMessage =
            responseData.error ||
            "Une erreur est survenue lors de l'envoi de votre message";
          console.error('Form submission error:', errorMessage);
          toast.error(errorMessage);
        }
      } catch (error) {
        console.error('Form submission error:', error);
        toast.error(
          "Une erreur inattendue s'est produite lors de l'envoi de votre message",
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  const titleAnimationText = [...'contact'];

  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="">
          <h2 className="font-montserrat text-dark-800 dark:text-almost-white mb-6 text-2xl font-semibold md:text-4xl">
            Prenons{' '}
            <span className="from-primary-500 to-secondary-500 inline-block bg-linear-to-r bg-clip-text text-6xl text-transparent md:text-7xl">
              {titleAnimationText.map((element, index) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: index / 10,
                  }}
                  key={index}
                >
                  {element}
                </motion.span>
              ))}
            </span>
          </h2>
        </div>

        <div className="w-full p-6 lg:w-2/4">
          <form onSubmit={handleSubmit(onSubmit)} className="font-montserrat">
            <label className="mb-6 block" htmlFor="name">
              <span className="text-dark-800 dark:text-almost-white">
                Votre nom
              </span>
              <input
                type="text"
                className="border-dark-300 focus:border-primary-500 mt-1 block w-full rounded-md border p-2 transition duration-200 ease-in-out focus:shadow-md focus:ring-1 focus:ring-purple-500 focus:outline-hidden"
                {...register('name', {
                  required: 'Veuillez renseigner votre nom et / ou prénom',
                  minLength: {
                    value: 2,
                    message: 'Le nom doit contenir au moins 2 caractères',
                  },
                })}
                onBlur={() => trigger('name')}
              />
              {errors.name && (
                <p className="text-primary-500 pt-1 text-xs">
                  {errors.name.message}
                </p>
              )}
            </label>
            <label className="mb-6 block" htmlFor="email">
              <span className="text-dark-800 dark:text-almost-white">
                Votre adresse email
              </span>
              <input
                type="email"
                className="border-dark-300 focus:border-primary-500 mt-1 block w-full rounded-md border p-2 transition duration-200 ease-in-out focus:shadow-md focus:ring-1 focus:ring-purple-500 focus:outline-hidden"
                {...register('senderMail', {
                  required: 'Veuillez renseigner une adresse email',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Veuillez renseigner une adresse email valide',
                  },
                })}
                onBlur={() => trigger('senderMail')}
              />
              {errors.senderMail && (
                <p className="text-primary-500 pt-1 text-xs">
                  {errors.senderMail.message}
                </p>
              )}
            </label>
            <label className="mb-6 block" htmlFor="message">
              <span className="text-dark-800 dark:text-almost-white">
                Votre message
              </span>
              <textarea
                rows={6}
                className="border-dark-300 focus:border-primary-500 mt-1 block w-full rounded-md border p-2 transition duration-200 ease-in-out focus:shadow-md focus:ring-1 focus:ring-purple-500 focus:outline-hidden"
                {...register('message', { required: true })}
                onBlur={() => trigger('message')}
              />
              {errors.message && (
                <p className="text-primary-500 pt-1 text-xs">
                  Veuillez renseigner un message
                </p>
              )}
            </label>

            <div className="hidden">
              <label htmlFor="website" className="block w-full">
                Website (Laisser ce champ vide)
              </label>
              <input
                type="text"
                className="border-dark-300 focus:border-primary-500 mt-1 block w-full rounded-md border p-2 transition duration-200 ease-in-out focus:shadow-md focus:ring-1 focus:ring-purple-500 focus:outline-hidden"
                {...register('honeyPot')}
              />
            </div>

            <Controller
              name="rgpd"
              control={control}
              defaultValue={false}
              rules={{ required: true }}
              render={({ field }) => (
                <label className="flex pb-4">
                  <input
                    type="checkbox"
                    className="accent-primary-500 h-4 w-4"
                    {...field}
                    value={field.value ? 'true' : 'false'}
                  />
                  <Link
                    href={'/rgpd'}
                    className="text-dark-900 dark:text-almost-white ml-2 text-xs font-light hover:underline"
                  >
                    J&apos;accepte les conditions générales et la politique de
                    confidentialité
                  </Link>
                </label>
              )}
            />

            {!isLoading && (
              <button
                disabled={isSubmitting}
                type="submit"
                className={`submitbtn bg-primary-600 hover:bg-primary-800 to-secondary-500 border-primary-600 hover:border-primary-800 font-montserrat mt-6 flex rounded-md border-2 border-solid px-4 py-2 text-left text-sm font-light text-white duration-300 ease-in-out ${
                  isSubmitting ? 'cursor-not-allowed opacity-50' : ''
                }`}
              >
                Envoyer
              </button>
            )}
            <Toaster
              toastOptions={{
                success: {
                  style: {
                    color: '#fff',
                    background: '#2BBB6E',
                  },
                  duration: 5000,
                },
                error: {
                  style: {
                    background: '#D5474C',
                  },
                  duration: 5000,
                },
              }}
            />
          </form>
        </div>
      </div>
    </>
  );
}
