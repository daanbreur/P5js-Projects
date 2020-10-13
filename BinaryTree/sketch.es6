let tree;

function setup() {
	noCanvas();

	tree = new BinaryTree();
	tree.addValue( 5 )
	tree.addValue( 3 )
	tree.addValue( 6 )
	tree.addValue( 4 )
	tree.addValue( 7 )
	console.log( tree )

	tree.traverse()
	tree.search(4)

}
