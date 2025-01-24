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
  } = useForm<FormInputs>();

  const { isSubmitting } = formState;

  const onSubmit = async (formData: FormInputs) => {
    if (!isLoading) {
      setIsLoading(true);
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
      if (response.ok) {
        toast.success(
          'Votre message a bien été envoyé, je vous répondrai dans les plus brefs délais',
        );
        reset();
      } else {
        toast.error(
          "Oups, une erreur est survenue lors de l'envoi de votre message",
        );
      }
      setIsLoading(false);
    }
  };

  const titleAnimationText = [...'contact'];

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full w-full ">
        <div className="">
          <h2 className="mb-6 text-2xl md:text-4xl font-montserrat font-semibold  text-dark-800 dark:text-almost-white ">
            Prenons{' '}
            <span className="text-6xl md:text-7xl bg-linear-to-r from-primary-500 to-secondary-500 inline-block text-transparent bg-clip-text">
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
            <label className="block mb-6" htmlFor="name">
              <span className=" text-dark-800 dark:text-almost-white">
                Votre nom
              </span>
              <input
                type="text"
                className="block w-full mt-1 p-2 border border-dark-300 rounded-md focus:outline-hidden focus:ring-1 focus:ring-purple-500 focus:border-primary-500 focus:shadow-md transition ease-in-out duration-200"
                {...register('name', { required: true })}
                onBlur={() => trigger('name')}
              />
              {errors.name && (
                <p className="text-primary-500 text-xs pt-1">
                  Veuillez renseigner votre nom et / ou prénom
                </p>
              )}
            </label>
            <label className="block mb-6" htmlFor="email">
              <span className=" text-dark-800 dark:text-almost-white">
                Votre adresse email
              </span>
              <input
                type="email"
                className="block w-full mt-1 p-2 border border-dark-300 rounded-md focus:outline-hidden focus:ring-1 focus:ring-purple-500 focus:border-primary-500 focus:shadow-md transition ease-in-out duration-200"
                {...register('senderMail', { required: true })}
                onBlur={() => trigger('senderMail')}
              />
              {errors.senderMail && (
                <p className="text-primary-500 text-xs pt-1">
                  Veuillez renseigner une adresse email valide
                </p>
              )}
            </label>
            <label className="block mb-6" htmlFor="message">
              <span className=" text-dark-800 dark:text-almost-white">
                Votre message
              </span>
              <textarea
                rows={6}
                className="block w-full mt-1 p-2 border border-dark-300 rounded-md focus:outline-hidden focus:ring-1 focus:ring-purple-500 focus:border-primary-500 focus:shadow-md transition ease-in-out duration-200"
                {...register('message', { required: true })}
                onBlur={() => trigger('message')}
              />
              {errors.message && (
                <p className="text-primary-500 text-xs pt-1">
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
                className="block w-full mt-1 p-2 border border-dark-300 rounded-md focus:outline-hidden focus:ring-1 focus:ring-purple-500 focus:border-primary-500 focus:shadow-md transition ease-in-out duration-200"
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
                    className="w-4 h-4 accent-primary-500"
                    {...field}
                    value={field.value ? 'true' : 'false'}
                  />
                  <Link
                    href={'/rgpd'}
                    className="ml-2 font-light text-dark-900 dark:text-almost-white text-xs hover:underline"
                  >
                    J&apos;accepte les conditions générales et la politique de
                    confidentialité
                  </Link>
                </label>
              )}
            />

            {!isLoading && (
              <button
                disabled={!formState.isValid || isSubmitting}
                type="submit"
                className={`submitbtn flex bg-primary-600 hover:bg-primary-800 to-secondary-500 border-solid border-2 border-primary-600 hover:border-primary-800 text-white font-montserrat font-light text-sm text-left px-4 py-2 mt-6 rounded-md ease-in-out duration-300${!formState.isValid || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
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
