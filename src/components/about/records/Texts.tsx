import Link from "next/link";

interface TextsProps {
  year: string;
}
const Texts = ({ year }: TextsProps) => {
  return (
    <div>
      {year === "2014" ? (
        <div>
          <h1 className="font-bold text-xl mb-2">
            Ut Lectus Arcu Bibendum At Varius Vel?
          </h1>
          <p className="text-lg mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit.
            Euismod in pellentesque massa placerat duis ultricies lacus sed.
            <span className="text-red-600 underline font-bold">
              <Link href={"#"}>
                {" "}
                Purus sit amet luctus venenatis lectus magna fringilla urna
                porttitor.
              </Link>
            </span>
          </p>
          <h2 className="font-bold text-xl mb-2">
            Quis Enim Lobortis Scelerisque Fermentum Dui Faucibus In.
          </h2>
          <p className="text-lg mb-5">
            Felis eget nunc lobortis mattis aliquam faucibus. Sit amet cursus
            sit amet dictum sit amet justo donec. Ac turpis egestas maecenas
            pharetra convallis.
          </p>
        </div>
      ) : year === "2018" ? (
        <div>
          <h1 className="font-bold text-xl mb-2">
            Arcu Bibendum At Varius Vel Pharetra Vel Turpis Nunc.
          </h1>
          <p className="text-lg mb-5">
            Ac turpis egestas maecenas pharetra elit,
            <span className="text-red-600 underline font-bold">
              <Link href={"#"}>
                {" "}
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </Link>
            </span>
            Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit.
            Euismod in pellentesque massa placerat duis ultricies lacus sed.
            Purus sit amet luctus venenatis lectus magna fringilla urna
            porttitor. Quam nulla porttitor massa id neque aliquam vestibulum.
            Nunc mattis enim ut tellus elementum sagittis vitae et.
          </p>
          <p className="text-lg mb-5">
            Elit at imperdiet dui accumsan sit amet. Tristique risus nec feugiat
            in fermentum posuere. Blandit aliquam etiam erat velit scelerisque.
            Arcu vitae elementum curabitur vitae nunc sed velit dignissim.
            Semper auctor neque vitae tempus quam.
          </p>
        </div>
      ) : year === "2020" ? (
        <div>
          <h1 className="font-bold text-xl mb-2">
            Arcu Vitae Elementum Curabitur Vitae Nunc Sed Velit Dignissim.
          </h1>
          <p className="text-lg mb-5">
            Semper risus in hendrerit gravidadolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Pellentesque adipiscing commodo elit at
            imperdiet dui accumsan sit. Euismod in pellentesque massa placerat
            duis ultricies lacus sed. Purus sit amet luctus venenatis lectus
            magna fringilla urna porttitor. Quam nulla porttitor massa id neque
            aliquam vestibulum.
            <span className="text-red-600 underline font-bold">
              <Link href={"#"}>
                {" "}
                Nunc mattis enim ut tellus elementum sagittis vitae et.
              </Link>
            </span>
          </p>
          <p className="text-lg mb-5">
            Quis enim lobortis scelerisque fermentum dui faucibus in. Diam donec
            adipiscing tristique risus nec feugiat in fermentum posuere. Orci a
            scelerisque purus semper eget duis at. Quis lectus nulla at volutpat
            diam ut venenatis tellus in.
          </p>
        </div>
      ) : year === "2022" ? (
        <div>
          <h1 className="font-bold text-xl mb-2">
            Amet Consectetur Adipiscing Elit Pellentesque Habitant.
          </h1>
          <p className="text-lg mb-5">
            Quis enim lobortis scelerisque fermentum dui faucibus in. Diam donec
            adipiscing tristique risus nec feugiat in fermentum posuere. Orci a
            scelerisque purus semper eget duis at. Quis lectus nulla at volutpat
            diam ut venenatis tellus in.
          </p>
          <p className="text-lg mb-5">
            Semper risus in hendrerit gravidadolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Pellentesque adipiscing commodo elit at
            imperdiet dui accumsan sit. Purus sit amet luctus venenatis lectus
            magna fringilla urna porttitor. Quam nulla porttitor massa id neque
            aliquam vestibulum.{" "}
            <span className="text-red-600 underline font-bold">
              <Link href={"#"}>
                {" "}
                Nunc mattis enim ut tellus elementum sagittis vitae et.
              </Link>
            </span>
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Texts;
