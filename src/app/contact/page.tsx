import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import { AiFillGithub, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'JM에게 메일 보내기',
};

const LINKS = [
  { icon: <AiFillGithub />, url: '' },
  { icon: <AiFillInstagram />, url: '' },
  { icon: <AiFillYoutube />, url: '' },
];

const ContactPage = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>thekrjm@naver.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <div key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-5xl hover:text-red-500"
            >
              {link.icon}
            </a>
          </div>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
