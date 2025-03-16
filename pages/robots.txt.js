const Robots = () => {};

export const getServerSideProps = ({res}) => {
  const robots = `User-agent: *
Allow: /

Sitemap: https://as-golfdessablesdolonne.vercel.app/sitemap.xml`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(robots);
  res.end();

  return {
    props: {},
  };
};

export default Robots; 