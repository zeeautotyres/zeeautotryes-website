import { Archivo, Roboto } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500','700', '900'],
  variable: '--body-font',
});
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--heading-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'Cripar - Car Repair Services NextJS Template',
    template: '%s | Cripar - Car Repair Services NextJS Template',
  },
  description: 'Cripar - Car Repair Services NextJS Template',
  openGraph: {
    title: 'Cripar - Car Repair Services NextJS Template',
    description: 'Cripar - Car Repair Services NextJS Template',
    image: '/openGraphImage.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${roboto.variable} ${archivo.variable}`}>
        {children}
      </body>
    </html>
  );
}
