import Nast2023SubPage from './Nast2023SubPage';

const photos = [
  '/images/971def_6538d16c4c03415ab20e452f992462cf.jpg',
  '/images/971def_c700e83b1eab4eb5abbe030580aaf614.jpg',
  '/images/971def_4b35dedfec4e4c7198b87cdb1935e9ea.jpg',
  '/images/971def_81bef4264fc24e90894ba4a42b9df023.jpg',
  '/images/971def_96510d51fb19411aa968df1e99315228.jpg',
  '/images/971def_072fe35e1bc24ceb815b94191c3e9bae.jpg',
  '/images/971def_ce98394151c943a59bee7cd4785b521d.jpg',
  '/images/971def_5f2241fb9c9540ab9bb43d83e6014b7d.jpg',
  '/images/971def_6b2457aa83274720bcea5b8317f881c5.jpg',
  '/images/971def_3195b4129b764b7f82bf69a15bb863b3.jpg',
  '/images/971def_b885bb5c0e3741a9b73d361539bfcb96.jpg',
  '/images/971def_820074ce56f341d19435b298c2c2142f.jpg',
];

export default function Nast2023Photos() {
  return (
    <Nast2023SubPage title="Photos">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
        {photos.map((src, i) => (
          <img key={i} src={src} alt={`2023 NAST event photo ${i + 1}`} style={{ width: '100%', borderRadius: '4px' }} loading="lazy" />
        ))}
      </div>
    </Nast2023SubPage>
  );
}
