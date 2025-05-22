const CustomGoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43611.11307989292!2d-118.46803837554467!3d33.88356409420593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b3c5e2b0632f%3A0x70351d4f4154520!2sManhattan%20Beach%2C%20CA%2C%20EUA!5e1!3m2!1spt-BR!2sbr!4v1747920146593!5m2!1spt-BR!2sbr"
      width="100%"
      height="600"
      style={{border:0}}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default CustomGoogleMap;
