import { content } from '@/data/content';
import Icon from './Icon';
import './styles/SocialIcons.css';

export default function SocialIcons() {
  return (
    <ul className="social-icons">
      {content.social.map((link) => (
        <li key={link.label}>
          <a
            href={link.url}
            target={link.url.startsWith('mailto:') ? undefined : '_blank'}
            rel="noreferrer"
            aria-label={link.label}
            title={link.label}
          >
            <Icon name={link.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
