export default function Home() {
  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { width: 100%; height: 100%; overflow: hidden; background: #0A1628; }
        .spline-container { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; }
        iframe { width: 100%; height: 100%; border: none; display: block; }
      `}</style>
      <div className="spline-container">
        <iframe
          src="https://my.spline.design/thebluemarble-keVOvs2KGeZ0M1B681M26QT7/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="The Blue Marble - Spline 3D Scene"
          allow="autoplay; fullscreen; xr-spatial-tracking"
        />
      </div>
    </>
  )
}