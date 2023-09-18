import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  useNavigate,
} from "react-router-dom";

function Quiz() {
  return (
    <BrowserRouter>
      {/* a태그와 Link태그는 차이점 a태그는 새로고침이 일어남 */}
      <Link to="/"> home </Link>
      <Link to="/cart"> cart </Link>
      <Link to="/users"> users </Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id/" element={<ProductDetailPage />} />
        <Route path="/product/:id/notice" element={<NoticePage />} />
        <Route path="/cart" element={<CartPage />} />

        {/* <Route path="/users/*" element={<Outlet />}> */}
        <Route path="/users/*" element={<Users />}>
          {/* <Route path="" element={<Users />} /> */}
          <Route path="coupon/" element={<Coupon />} />
          <Route path="question/" element={<Question />} />
          <Route path="notice/" element={<Notice />} />
        </Route>
      </Routes>
      <Button />
    </BrowserRouter>
  );
}

function Button() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/users");
      }}
    >
      유저보기
    </button>
  );
}

function HomePage() {
  return <h1>HomePage 입니다.</h1>;
}

function ProductDetailPage() {
  const { id } = useParams();
  return <h1>ProductDetailPage {id}입니다.</h1>;
}

function NoticePage() {
  const { id } = useParams();
  return <h1>ProductDetailPage {id}의 정보입니다.</h1>;
}

function CartPage() {
  return <h1>CartPage 입니다.</h1>;
}
function Users() {
  return (
    <div>
      <h1>Users 입니다.</h1>
      <Outlet />
    </div>
  );
}

function Coupon() {
  return <h1>Users - Coupon 입니다.</h1>;
}
function Question() {
  return <h1>Users - Question 입니다.</h1>;
}
function Notice() {
  return <h1>Users - Notice 입니다.</h1>;
}

export default Quiz;
