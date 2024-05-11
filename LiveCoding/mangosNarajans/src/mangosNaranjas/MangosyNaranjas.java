package mangosNaranjas;

public class MangosyNaranjas {
    public int mangos;
    public int naranjas;

    public MangosyNaranjas(int mangos, int naranjas) {
        this.mangos = mangos;
        this.naranjas = naranjas;
    }

    public void imprimirCajas() {
        int cajasMangos = mangos;
        int cajasNaranjas = naranjas;
        int cajas = 1;

        for (int i = 2; i <= Math.min(mangos, naranjas); i++) {
            if (mangos % i == 0 && naranjas % i == 0) {
                cajas = i;
                cajasMangos = mangos / i;
                cajasNaranjas = naranjas / i;
            }
        }

        System.out.println("El número de cajas es: " + cajas);
        System.out.println("El número de mangos en una caja es: " + cajasMangos);
        System.out.println("El número de naranjas en una caja es: " + cajasNaranjas);
    }

	public void imprimirCajas1() {
		// TODO Auto-generated method stub
		
	}
}

