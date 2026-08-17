import resumeData from '../data/resumeData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {currentYear} {resumeData.personal.name}. Built with{' '}
          <span className="footer-heart">♥</span> using React.
        </p>
      </div>
    </footer>
  );
}
