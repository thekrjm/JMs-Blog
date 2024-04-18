'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from '../../Banner';

type FormData = {
  from: string;
  title: string;
  content: string;
};

const ContactForm = () => {
  const [form, setForm] = useState<FormData>({
    from: '',
    title: '',
    content: '',
  });

  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChangeText = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('form', form);
    setBanner({ message: '발송을 성공했습니다!', state: 'success' });
    setTimeout(() => setBanner(null), 3000);
  };

  return (
    <section>
      <form className="flex flex-col items-center" onSubmit={onSubmit}>
        {banner && <Banner banner={banner} />}
        <label htmlFor="from">Your Email</label>
        <input
          type="text"
          id="from"
          name="from"
          value={form.from}
          onChange={onChangeText}
          required
          autoFocus
        />
        <label htmlFor="from" className="font-bold">
          title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={form.title}
          onChange={onChangeText}
          required
        />
        <label htmlFor="content">content</label>
        <textarea
          id="content"
          name="content"
          value={form.content}
          onChange={onChangeText}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
