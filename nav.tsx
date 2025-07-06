{auth.currentUser ? (
  <button onClick={() => auth.signOut()}>Выйти</button>
) : (
  <>
    <Link href=\"/login\">Войти</Link>
    <Link href=\"/register\">Регистрация</Link>
  </>
)}
