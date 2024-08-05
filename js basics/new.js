const MOD = 1000000007;

class Node {
    constructor(val) {
        this.val = val;
        this.children = [];
    }
}

function buildTree(n, edges) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const root = new Node(1);
    const visited = new Set();
    const dfs = (node, parent) => {
        visited.add(node);
        for (const child of graph[node]) {
            if (child !== parent) {
                const childNode = new Node(child);
                node.children.push(childNode);
                dfs(child, node);
            }
        }
    };

    dfs(1, -1);
    return root;
}

function countSubsets(root, k, dp = {}) {
    if (root === null) {
        return 0;
    }

    const key = `${root.val}-${k}`;
    if (key in dp) {
        return dp[key];
    }

    let count = 0;
    if (root.val === k) {
        count++;
    }

    for (const child of root.children) {
        count = (count + countSubsets(child, k)) % MOD;
        count = (count + countSubsets(child, k - root.val)) % MOD;
    }

    dp[key] = count;
    return count;
}

function solve(n, m, k, v, edges) {
    const root = buildTree(n, edges);
    let total = 0;
    const dfsCount = (node) => {
        total = (total + countSubsets(node, k)) % MOD;
        for (const child of node.children) {
            dfsCount(child);
        }
    };
    dfsCount(root);
    return total;
}

// Example usage:
const n = 5;
const m = 4;
const k = 3;
const v = [0, 1, 2, 3, 4];
const edges = [
    [1, 2],
    [1, 3],
    [2, 4],
    [2, 5],
];

const result = solve(n, m, k, v, edges);
console.log(result);
