import React from 'react';

const Star = ({ style }: { style: React.CSSProperties }) => (
    <div className="absolute bg-white rounded-full animate-twinkle" style={style}></div>
);

const Footer: React.FC = () => {
    // Generate random stars
    const stars = Array.from({ length: 50 }).map((_, i) => {
        const style = {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${Math.random() * 3 + 2}s`
        };
        return <Star key={i} style={style} />;
    });

    return (
        <footer className="relative text-center p-8 bg-[#0c1426] text-slate-400 text-sm overflow-hidden">
            <div className="absolute inset-0 opacity-50">{stars}</div>
            <div className="relative z-10">
                <div className="flex justify-center gap-6 mb-4">
                    {/* Instagram Link */}
                    <a href="https://www.instagram.com/nep_tou?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-white transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44c0-.795-.645-1.44-1.441-1.44z"/></svg>
                    </a>
                     <a href="https://www.facebook.com/neptofficial/?locale=hi_IN" className="hover:text-white transition-colors" aria-label="Facebook">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    </a>
                     <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.215 3.796 4.653-.69.188-1.433.23-2.184.084.636 1.933 2.488 3.328 4.682 3.364-1.733 1.354-3.923 2.162-6.307 2.162-.409 0-.812-.023-1.21-.074 2.24 1.448 4.903 2.293 7.766 2.293 9.254 0 14.309-7.669 14.043-14.354.981-.705 1.826-1.59 2.5-2.59z"/></svg>
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Neptou. The Soul of Nepal in Your Pocket.</p>
                <p>Prepare for your adventure.</p>
            </div>
        </footer>
    );
};

export default Footer;