import Node from "./Node";

export default class ThetaStar {

    constructor(matrix) {
        this.matrix = matrix;
        this.rows = matrix.length;
        this.cols = matrix[0].length;
        this.openSet = []; // открытый список для узлов, которые нужно рассмотреть
        this.closedSet = []; // закрытый список для уже просмотренных узлов
        this.startNode = null;
        this.endNode = null;
        this.directions = [
            {dx: -1, dy: 0}, // вверх
            {dx: 1, dy: 0}, // вниз
            {dx: 0, dy: -1}, // влево
            {dx: 0, dy: 1}, // вправо
        ];
    }

    isValidCell(row, col) {
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
    }

    isWalkable(row, col) {
        return this.isValidCell(row, col) && this.matrix[row][col] === 1;
    }

    heuristic(node, endNode) {
        // Эвристическое расстояние между двумя точками
        return Math.abs(node.row - endNode.row) + Math.abs(node.col - endNode.col);
    }

    findPath(startRow, startCol, endRow, endCol) {
        this.startNode = new Node(startRow, startCol, 0);
        this.endNode = new Node(endRow, endCol);

        this.openSet.push(this.startNode);

        while (this.openSet.length > 0) {
            this.openSet.sort((a, b) => a.f - b.f); // сортируем открытый список по общей оценке пути

            const currentNode = this.openSet.shift();

            if (
                currentNode.row === this.endNode.row &&
                currentNode.col === this.endNode.col
            ) {
                // путь найден, восстановление пути
                let path = [];
                let temp = currentNode;
                while (temp) {
                    path.unshift([temp.row, temp.col]);
                    temp = temp.parent;
                }
                return path;
            }

            this.closedSet.push(currentNode);

            for (const dir of this.directions) {
                const newRow = currentNode.row + dir.dx;
                const newCol = currentNode.col + dir.dy;

                if (
                    this.isValidCell(newRow, newCol) &&
                    this.isWalkable(newRow, newCol)
                ) {
                    const neighbor = new Node(newRow, newCol);
                    if (
                        !this.closedSet.find(
                            (node) => node.row === neighbor.row && node.col === neighbor.col
                        )
                    ) {
                        const tentativeG =
                            currentNode.g + this.heuristic(currentNode, neighbor);
                        if (
                            tentativeG < neighbor.g ||
                            !this.openSet.find(
                                (node) => node.row === neighbor.row && node.col === neighbor.col
                            )
                        ) {
                            neighbor.g = tentativeG;
                            neighbor.h = this.heuristic(neighbor, this.endNode);
                            neighbor.f = neighbor.g + neighbor.h;
                            neighbor.parent = currentNode;

                            if (
                                !this.openSet.find(
                                    (node) =>
                                        node.row === neighbor.row && node.col === neighbor.col
                                )
                            ) {
                                this.openSet.push(neighbor);
                            }
                        }
                    }
                }
            }
        }

        return "No path found";
    }
}