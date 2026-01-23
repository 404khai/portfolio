import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Keystatic Admin',
  description: 'Admin interface for managing content',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
