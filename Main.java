/******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Main
{
	public static void main(String[] args) {
		Integer[] Array = { 1, 2, 3, 4, 5, 6, 7 };

		List<Integer> shuffleArray  = Arrays.asList(Array);

		Collections.shuffle(shuffleArray);

		shuffleArray.toArray(Array);

		System.out.println(Arrays.toString(Array));
	}
}
