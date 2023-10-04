function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<LogIn />}/>
          <Route path='/cadastro' element={<SignIn />}/>
          {/* <Route path='/subscriptions' element={<Subscriptions/>}/>
          <Route path='subscriptions/1' element={<Plus/>}></Route>
          <Route path='subscriptions/2' element={<Gold/>}></Route>
          <Route path='subscriptions/3' element={<Platinum/>}></Route>
          <Route path='/home' element={<Home/>}></Route> */}
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
