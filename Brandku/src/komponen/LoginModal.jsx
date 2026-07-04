import { useState } from 'react';

const LoginModal = ({ isOpen, onClose, onLogin, loading, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await onLogin({ email, password });
    if (success) {
      onClose();
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="pop-in w-[90vw] max-w-sm rounded-[2rem] border border-white/10 bg-[#1D1430] p-8 text-white shadow-2xl"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="display text-xl font-bold">Masuk ke Brandku</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup"
            className="text-xl text-white/50 transition hover:text-white"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-white/70">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="nama@brandku.com"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[#C8FF4D] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-white/70">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[#C8FF4D] focus:outline-none"
            />
          </div>

          {error && (
            <p className="rounded-xl bg-[#FF4D8D]/10 px-4 py-2.5 text-sm text-[#FF4D8D]">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-full bg-[#FF4D8D] py-3 text-sm font-bold text-[#150E23] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Memproses...' : 'Masuk'}
          </button>

          <p className="text-center text-xs text-white/40">
            Demo: adzril@brandku.com / 123
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;