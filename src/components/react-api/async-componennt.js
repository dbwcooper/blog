function asyncComponent(importComponent) {
  const [C, setComponent] = useState('');
  useEffect(() => {
    importComponent().then((res) => {
      setComponent(res.default);
    });
  }, []);

  return C ? <C /> : null;
}
