'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-hot-toast';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => console.log(data);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full w-full ">
        <h2 className="mb-6 text-2xl md:text-4xl font-montserrat font-semibold  text-dark-800 dark:text-almost-white ">
          On se contacte ?
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center w-full"
        >
          <input
            {...register('name')}
            type="text"
            placeholder="Nom"
            className="input"
          />
          <input
            {...register('email')}
            type="email"
            placeholder="Email"
            className="input"
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="input"
          />
          <button
            type="submit"
            className="flex bg-primary-500 dark:bg-primary-800 hover:bg-primary-800 dark:hover:bg-primary-900 to-secondary-500 border-solid border-2"
            onClick={() => toast.success('Message envoyé')}
          >
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
}
