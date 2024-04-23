'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from '../../Banner';
import { sendContactEmail } from '@/service/contact';

type FormData = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const [form, setForm] = useState<FormData>(DEFAULT_DATA);

  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChangeText = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendContactEmail(form) //이메일 발송요청
      .then(() => {
        setBanner({ message: '발송을 성공했습니다.', state: 'success' });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({ message: '메일전송을 실패했습니다.', state: 'error' });
      })
      .finally(() => {
        setTimeout(() => setBanner(null), 3000);
      });
  };

  return (
    <section className="w-full max-w-md ">
      {banner && <Banner banner={banner} />}
      <form
        className="w-full max-w-md flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white"
        onSubmit={onSubmit}
      >
        <label htmlFor="from" className="font-semibold">
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          value={form.from}
          onChange={onChangeText}
          required
          autoFocus
          className="text-black"
        />
        <label htmlFor="subject" className="font-semibold">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={form.subject}
          onChange={onChangeText}
          required
          className="text-black"
        />
        <label htmlFor="message" className="font-semibold">
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          value={form.message}
          onChange={onChangeText}
          required
          className="text-black"
        />
        <button
          type="submit"
          className="bg-yellow-300 text-black font-bold hover:bg-yellow-400"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
