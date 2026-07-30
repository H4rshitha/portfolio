import { content } from '@/data/content';
import SocialIcons from './SocialIcons';
import './styles/Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          © {year} {content.identity.name}. All rights reserved.
        </p>
        <SocialIcons />
      </div>
    </footer>
  );
}
