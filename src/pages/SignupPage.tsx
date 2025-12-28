// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowLeft, Mail, Lock, Check } from 'lucide-react';
// import { motion } from 'framer-motion';
// import Logo from '../components/Logo';
// import Button from '../components/Button';

// const SignupPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
  
//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       {/* Left panel with image and brand info */}
//       <div className="hidden md:flex md:w-1/2 bg-soursz-dark-800 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-soursz-dark-800/70 to-soursz-dark-800 z-10"></div>
//         <img
//           src="https://images.pexels.com/photos/8412414/pexels-photo-8412414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//           alt="Music studio"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
        
//         <div className="absolute inset-0 z-20 flex flex-col justify-between p-10">
//           <Link to="/" className="flex items-center space-x-2">
//             <Logo className="w-10 h-10" />
//             <span className="text-2xl font-bold">Soursz</span>
//           </Link>
          
//           <div className="max-w-md">
//             <h1 className="text-3xl font-bold mb-4">
//               Take Your Music to the <span className="text-soursz-neon">Next Level</span>
//             </h1>
//             <p className="text-white/70 mb-6">
//               Join thousands of artists who are using our AI-powered promotion platform 
//               to grow their Spotify presence and reach new listeners.
//             </p>
            
//             <div className="space-y-4">
//               <div className="flex items-start space-x-3">
//                 <div className="text-soursz-neon mt-0.5">
//                   <Check size={18} />
//                 </div>
//                 <p className="text-white/80">
//                   <strong>AI-targeting</strong> to reach listeners who will love your music
//                 </p>
//               </div>
              
//               <div className="flex items-start space-x-3">
//                 <div className="text-soursz-neon mt-0.5">
//                   <Check size={18} />
//                 </div>
//                 <p className="text-white/80">
//                   <strong>Real playlist placements</strong> from our curated network
//                 </p>
//               </div>
              
//               <div className="flex items-start space-x-3">
//                 <div className="text-soursz-neon mt-0.5">
//                   <Check size={18} />
//                 </div>
//                 <p className="text-white/80">
//                   <strong>Detailed analytics</strong> to track your growth and performance
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex space-x-4">
//             <div className="flex -space-x-2">
//               <img
//                 src="https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=100"
//                 alt="User"
//                 className="w-8 h-8 rounded-full border-2 border-soursz-dark-800"
//               />
//               <img
//                 src="https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&w=100"
//                 alt="User"
//                 className="w-8 h-8 rounded-full border-2 border-soursz-dark-800"
//               />
//               <img
//                 src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
//                 alt="User"
//                 className="w-8 h-8 rounded-full border-2 border-soursz-dark-800"
//               />
//             </div>
//             <p className="text-white/70 text-sm">
//               Joined by 10,000+ artists worldwide
//             </p>
//           </div>
//         </div>
//       </div>
      
//       {/* Right panel with sign up form */}
//       <div className="flex-1 flex items-center justify-center p-6">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-md w-full"
//         >
//           <div className="md:hidden flex justify-between items-center mb-8">
//             <Link to="/" className="text-white/70 hover:text-white flex items-center">
//               <ArrowLeft size={20} className="mr-1" />
//               Back
//             </Link>
//             <Link to="/" className="flex items-center space-x-2">
//               <Logo className="w-8 h-8" />
//               <span className="text-xl font-bold">Soursz</span>
//             </Link>
//           </div>
          
//           <div className="text-center md:text-left mb-8">
//             <h2 className="text-3xl font-bold mb-2">Create Your Account</h2>
//             <p className="text-white/70">
//               Let's get started with your music promotion journey
//             </p>
//           </div>
          
//           <div className="mb-6">
//             <div className="grid grid-cols-2 gap-3 mb-4">
//               <button className="btn-dark flex items-center justify-center py-2.5">
//                 <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
//                   <path
//                     fill="currentColor"
//                     d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                   />
//                   <path
//                     fill="currentColor"
//                     d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                   />
//                   <path
//                     fill="currentColor"
//                     d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                   />
//                   <path
//                     fill="currentColor"
//                     d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                   />
//                   <path fill="none" d="M1 1h22v22H1z" />
//                 </svg>
//                 Google
//               </button>
              
//               <button className="btn-dark flex items-center justify-center py-2.5">
//                 <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
//                   <path
//                     fill="currentColor"
//                     d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
//                   />
//                 </svg>
//                 Twitter
//               </button>
//             </div>
            
//             <div className="relative flex items-center justify-center mb-4">
//               <div className="flex-grow border-t border-white/10"></div>
//               <span className="mx-4 text-white/50 text-sm">or sign up with email</span>
//               <div className="flex-grow border-t border-white/10"></div>
//             </div>
//           </div>
          
//           <form className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label htmlFor="firstName" className="block mb-1 text-white/70 text-sm">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   className="input"
//                   placeholder="John"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="lastName" className="block mb-1 text-white/70 text-sm">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   className="input"
//                   placeholder="Doe"
//                   required
//                 />
//               </div>
//             </div>
            
//             <div>
//               <label htmlFor="email" className="block mb-1 text-white/70 text-sm">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <input
//                   type="email"
//                   id="email"
//                   className="input pl-11"
//                   placeholder="your@email.com"
//                   required
//                 />
//                 <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white/50">
//                   <Mail size={18} />
//                 </span>
//               </div>
//             </div>
            
//             <div>
//               <label htmlFor="password" className="block mb-1 text-white/70 text-sm">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   id="password"
//                   className="input pl-11"
//                   placeholder="At least 8 characters"
//                   required
//                 />
//                 <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white/50">
//                   <Lock size={18} />
//                 </span>
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/50 hover:text-white"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? 'Hide' : 'Show'}
//                 </button>
//               </div>
//             </div>
            
//             <div className="flex items-start">
//               <div className="flex items-center h-5">
//                 <input
//                   id="terms"
//                   type="checkbox"
//                   className="w-4 h-4 border border-white/20 rounded bg-soursz-dark-600 focus:ring-soursz-neon focus:ring-2"
//                   required
//                 />
//               </div>
//               <div className="ml-3 text-sm">
//                 <label htmlFor="terms" className="text-white/70">
//                   I agree to the <a href="#" className="text-soursz-neon hover:underline">Terms of Service</a> and <a href="#" className="text-soursz-neon hover:underline">Privacy Policy</a>
//                 </label>
//               </div>
//             </div>
            
//             <Button type="submit" variant="primary" fullWidth>
//               Create Account
//             </Button>
//           </form>
          
//           <p className="mt-6 text-center text-white/70">
//             Already have an account?{' '}
//             <Link to="/login" className="text-soursz-neon hover:underline">
//               Log in
//             </Link>
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;

































import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { API_URL } from '../config';

const SignupPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    terms: false,
  });

  const update = (key: keyof typeof form, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.firstName.trim() || !form.lastName.trim()) {
      setError('Please enter your first and last name.');
      return;
    }
    if (!form.email.trim() || !form.email.includes('@')) {
      setError('Please enter a valid email.');
      return;
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (!form.terms) {
      setError('You must accept the Terms of Service and Privacy Policy.');
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          password: form.password,
          role: 'artist',
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.message || 'Signup failed. Please try again.');
        return;
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      navigate('/');
    } catch {
      setError('Network error. Make sure your backend is running on port 5000.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left panel with image and brand info */}
      <div className="hidden md:flex md:w-1/2 bg-soursz-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-soursz-dark-800/70 to-soursz-dark-800 z-10" />
        <img
          src="https://images.pexels.com/photos/8412414/pexels-photo-8412414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Music studio"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 z-20 flex flex-col justify-between p-10">
          <Link to="/" className="flex items-center space-x-2">
            <Logo className="w-10 h-10" />
            <span className="text-2xl font-bold">Soursz</span>
          </Link>

          <div className="max-w-md">
            <h1 className="text-3xl font-bold mb-4">
              Take Your Music to the <span className="text-soursz-neon">Next Level</span>
            </h1>
            <p className="text-white/70 mb-6">
              Join thousands of artists who are using our AI-powered promotion platform
              to grow their Spotify presence and reach new listeners.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-soursz-neon mt-0.5">
                  <Check size={18} />
                </div>
                <p className="text-white/80">
                  <strong>AI-targeting</strong> to reach listeners who will love your music
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="text-soursz-neon mt-0.5">
                  <Check size={18} />
                </div>
                <p className="text-white/80">
                  <strong>Real playlist placements</strong> from our curated network
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="text-soursz-neon mt-0.5">
                  <Check size={18} />
                </div>
                <p className="text-white/80">
                  <strong>Detailed analytics</strong> to track your growth and performance
                </p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex -space-x-2">
              <img
                src="https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-soursz-dark-800"
              />
              <img
                src="https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-soursz-dark-800"
              />
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-soursz-dark-800"
              />
            </div>
            <p className="text-white/70 text-sm">Joined by 10,000+ artists worldwide</p>
          </div>
        </div>
      </div>

      {/* Right panel with sign up form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full"
        >
          <div className="md:hidden flex justify-between items-center mb-8">
            <Link to="/" className="text-white/70 hover:text-white flex items-center">
              <ArrowLeft size={20} className="mr-1" />
              Back
            </Link>
            <Link to="/" className="flex items-center space-x-2">
              <Logo className="w-8 h-8" />
              <span className="text-xl font-bold">Soursz</span>
            </Link>
          </div>

          <div className="text-center md:text-left mb-8">
            <h2 className="text-3xl font-bold mb-2">Create Your Account</h2>
            <p className="text-white/70">Let's get started with your music promotion journey</p>
          </div>

          {/* Social signup (Google only) */}
          <div className="mb-6">
            <button
              type="button"
              className="btn-dark flex items-center justify-center py-2.5 w-full"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
                <path fill="none" d="M1 1h22v22H1z" />
              </svg>
              Google
            </button>

            <div className="relative flex items-center justify-center mb-4 mt-4">
              <div className="flex-grow border-t border-white/10" />
              <span className="mx-4 text-white/50 text-sm">or sign up with email</span>
              <div className="flex-grow border-t border-white/10" />
            </div>
          </div>

          {error && (
            <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block mb-1 text-white/70 text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="input"
                  placeholder="John"
                  value={form.firstName}
                  onChange={(e) => update('firstName', e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block mb-1 text-white/70 text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="input"
                  placeholder="Doe"
                  value={form.lastName}
                  onChange={(e) => update('lastName', e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-white/70 text-sm">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="input pl-11"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  required
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white/50">
                  <Mail size={18} />
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-white/70 text-sm">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="input pl-11"
                  placeholder="At least 8 characters"
                  value={form.password}
                  onChange={(e) => update('password', e.target.value)}
                  required
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white/50">
                  <Lock size={18} />
                </span>
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/50 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-white/20 rounded bg-soursz-dark-600 focus:ring-soursz-neon focus:ring-2"
                  checked={form.terms}
                  onChange={(e) => update('terms', e.target.checked)}
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-white/70">
                  I agree to the{' '}
                  <a href="#" className="text-soursz-neon hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-soursz-neon hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>

            <Button type="submit" variant="primary" fullWidth disabled={loading}>
              {loading ? 'Creating...' : 'Create Account'}
            </Button>
          </form>

          <p className="mt-6 text-center text-white/70">
            Already have an account?{' '}
            <Link to="/login" className="text-soursz-neon hover:underline">
              Log in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;
