import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abhishek Chaturvedi | Fullstack Architect",
  description:
    "I'm a fullstack architect specialized in React.js, Next.js and Typescript who builds innovative web applications for desktop and mobile devices.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
