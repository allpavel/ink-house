export default function CallToAction() {
  return (
    <section
      className="bg-call-to-action bg-cover bg-center bg-no-repeat"
      id="novinki"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 font-medium text-white">
        <div className="max-w-lg">
          <div className="flex gap-2 pb-5">
            <div>
              <svg
                width="50"
                height="49"
                viewBox="0 0 50 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.5277 14.1189L35.4131 8.79691L33.0169 16.3613L32.2781 18.6935L34.6917 18.2941L42.5201 16.9988L36.4147 22.0669L34.5323 23.6295L36.7787 24.5984L44.0646 27.7411L36.1884 28.7038L33.7601 29.0006L35.126 31.0302L39.5562 37.613L32.4099 34.1647L30.2065 33.1015L30.2583 35.5474L30.4264 43.4805L26.2788 36.7159L25 34.6303L23.7212 36.7159L19.5736 43.4805L19.7417 35.5474L19.7935 33.1015L17.5901 34.1647L10.4438 37.613L14.874 31.0302L16.2399 29.0006L13.8116 28.7038L5.93539 27.7411L13.2213 24.5984L15.4677 23.6295L13.5853 22.0669L7.47989 16.9988L15.3083 18.2941L17.7219 18.6935L16.9831 16.3613L14.5869 8.79691L20.4723 14.1189L22.2868 15.7598L22.9262 13.3984L25 5.73935L27.0738 13.3984L27.7132 15.7598L29.5277 14.1189Z"
                  stroke="#EEDB6D"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <h2 className="text-2xl leading-6 lg:text-4xl">
              Новая коллекция французских авторов
            </h2>
          </div>
          <p className="md:pb-7 lg:text-lg">
            Сложно сказать, почему акционеры крупнейших компаний призывают нас к
            новым свершениям, которые, в свою очередь, должны быть заблокированы
            в рамках своих собственных рациональных ограничений.
          </p>
          <p className="pb-7">
            Принимая во внимание показатели успешности, граница обучения кадров
            предопределяет высокую востребованность направлений прогрессивного
            развития.
          </p>
          <button className="w-full bg-button-yellow-400 px-14 py-4 text-main-black transition-colors hover:bg-button-yellow-600 xs:w-2/4">
            Ознакомиться
          </button>
        </div>
      </div>
    </section>
  );
}
