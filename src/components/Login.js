import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase'; // パスはプロジェクトの構造に合わせて調整してください
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const auth = getAuth(app); // ここでapp定数を渡します
    try {
      const credential = await signInWithEmailAndPassword(auth, email, password);
      // Force token refresh
      await credential.user.getIdToken(true);
      const idTokenResult = await credential.user.getIdTokenResult();
      const iosUser = idTokenResult.claims.iosUser;

      if (iosUser) {
        // This user registered from the iOS app, log them out
        await auth.signOut();
        alert('iOSユーザーはログインできません！');
      } else {
        alert('User logged in successfully');
      }
    } catch (error) {
        console.error(error); // これを追加
        alert('Error logging in: ', error.message);
      }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-custom-red">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-center mb-4">
          {/* ここにロゴの画像か、またはSVGコンポーネントを配置 */}
          <div className="text-3xl">🐻 コージQ!</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black">メールアドレス</label>
            <input
  type="email"
  id="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
/>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-black">パスワード</label>
            <input
  type="password"
  id="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
/>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded text-white font-bold">ログイン</button>
        </form>
      </div>
    </div>
  );
}

export default Login;