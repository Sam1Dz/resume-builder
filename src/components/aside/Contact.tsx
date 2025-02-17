/* REACT ICONS */
import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa6';

/* TYPES */
import { ResumeBuilderType } from '../../configs/resume.type.ts';

interface AsideContactProps {
  contact: ResumeBuilderType['contact'];
}

export default function AsideContact({ contact }: AsideContactProps) {
  const telSelector = () => {
    if (contact.tel.type === 'whatsapp') {
      return {
        icon: <FaWhatsapp size={12} className="text-neutral-950" />,
        href: `https://wa.me/${contact.tel.number}`,
      };
    } else {
      return {
        icon: <FaPhone size={12} className="text-neutral-950" />,
        href: `tel:${contact.tel.number}`,
      };
    }
  };

  return (
    <section>
      <h2 className="mb-2 text-lg font-medium">Contact</h2>
      <div className="flex flex-col gap-1">
        {/* MAIL */}
        <div className="flex flex-row items-center gap-2">
          <div className="rounded-full bg-neutral-50 p-1">
            <FaEnvelope size={12} className="text-neutral-950" />
          </div>
          <a
            target="_blank"
            href={`mailto:${contact.mail}`}
            className="text-xs font-light text-wrap hover:underline"
          >
            {contact.mail}
          </a>
        </div>

        {/* TEL */}
        <div className="flex flex-row items-center gap-2">
          <div className="rounded-full bg-neutral-50 p-1">
            {telSelector().icon}
          </div>
          <a
            target="_blank"
            href={telSelector().href}
            className="text-xs font-light text-wrap hover:underline"
          >
            {contact.tel.number}
          </a>
        </div>

        {/* ADDRESS */}
        <div className="flex flex-row items-center gap-2">
          <div className="rounded-full bg-neutral-50 p-1">
            <FaLocationDot size={12} className="text-neutral-950" />
          </div>
          <p className="text-xs font-light text-wrap">{contact.address}</p>
        </div>
      </div>
    </section>
  );
}
