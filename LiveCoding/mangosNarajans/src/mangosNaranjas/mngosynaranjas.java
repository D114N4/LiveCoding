package mangosNaranjas;

import java.util.Scanner;

public class mngosynaranjas { 
	    public static void main(String[] args) {
	        Scanner sc = new Scanner(System.in);
	        System.out.println("Introduce un numero para los mangos y otro para las naranjas");
	        int mangos = sc.nextInt();
	        int naranjas = sc.nextInt();
	        MangosyNaranjas cajas = new MangosyNaranjas(mangos, naranjas);
	        cajas.imprimirCajas();
	       sc.close ();
	    }
	}


