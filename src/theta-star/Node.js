export default class Node {
    constructor(row, col, g = Infinity, h = 0) {
        this.row = row;
        this.col = col;
        this.g = g; // стоимость пути от начальной вершины
        this.h = h; // эвристическая оценка расстояния до конечной вершины
        this.f = this.g + this.h; // общая оценка стоимости пути
        this.parent = null; // ссылка на предыдущий узел в пути
    }
}