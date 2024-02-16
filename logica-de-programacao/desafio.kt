object ReceitaFederal{
    fun calcularImpostos(salario: Double): Double{
        val aliquota = when {
            (salario >= 0 && salario <= 1100) -> 0.05
            (salario >= 1100.01 && salario <= 2500) -> 0.10
            else -> 0.15
        }
        return aliquota * salario
        }
    }
}
fun fun main() {
    val valorSalario = readLine()!!.toDouble();
    val valorBeneficios = readLine()!!.toDouble();

    val valorImposto = ReceitaFederal.calcularImpostos(valorSalario);
    val saida = valorSalario - valorImposto + valorBeneficios;

    println(String.format("%.2f", saida));
    
}