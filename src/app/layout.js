import { Inter, Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--body-font',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--heading-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'Zee Auto Tyres & Alignment - Professional Tyre Services in Wembley',
    template: '%s | Zee Auto Tyres & Alignment',
  },
  description: 'Professional tyre services in Wembley. New & used tyres, wheel alignment, balancing, puncture repair and brake services. Quality guaranteed at competitive prices.',
  openGraph: {
    title: 'Zee Auto Tyres & Alignment - Professional Tyre Services in Wembley',
    description: 'Professional tyre services in Wembley. New & used tyres, wheel alignment, balancing, puncture repair and brake services. Quality guaranteed at competitive prices.',
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
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
