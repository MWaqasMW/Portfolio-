import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
