export const fetchCartas = async () => {
    try {
      const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Monster");
      const data = await response.json();
      const cartitas = data.data.map((carta) => ({
        id: carta.id,
        nombre: carta.name,
        imagen: carta.card_images[0].image_url,
        tipo: carta.type,
      }));
      return cartitas;
    } catch (error) {
      console.error("Error fetching cartas:", error);
      return [];
    }
  };
  