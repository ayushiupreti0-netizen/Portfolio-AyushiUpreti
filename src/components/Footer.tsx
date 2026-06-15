export default function Footer() {
  return (
    <footer className="bg-accent py-4">
      <div className="container mx-auto px-6">
        <p className="text-center text-primary text-sm font-poppins">
          © {new Date().getFullYear()} AU | Designed & Developed by Ayushi Upreti
        </p>
      </div>
    </footer>
  );
}
