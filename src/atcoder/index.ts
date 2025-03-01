function Main(input:string) {
	const result = input.split("\n");


	console.log(result);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
