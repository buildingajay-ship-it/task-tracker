// orgChart.js
document.addEventListener('DOMContentLoaded', function() {
    const orgChartData = [
        { id: 1, name: 'CEO', title: 'Chief Executive Officer', parent: null },
        { id: 2, name: 'CTO', title: 'Chief Technology Officer', parent: 1 },
        { id: 3, name: 'CFO', title: 'Chief Financial Officer', parent: 1 },
        { id: 4, name: 'Dev Manager', title: 'Development Manager', parent: 2 },
        { id: 5, name: 'QA Manager', title: 'Quality Assurance Manager', parent: 2 },
        { id: 6, name: 'Developer', title: 'Software Developer', parent: 4 },
        { id: 7, name: 'Tester', title: 'QA Tester', parent: 5 }
    ];

    function renderOrgChart(data) {
        const chartContainer = document.getElementById('org-chart');
        chartContainer.innerHTML = '';
        const tree = buildTree(data);
        chartContainer.appendChild(createNode(tree));
    }

    function buildTree(data) {
        const map = {};
        data.forEach(item => {
            map[item.id] = { ...item, children: [] };
        });
        const tree = [];
        data.forEach(item => {
            if (item.parent === null) {
                tree.push(map[item.id]);
            } else {
                map[item.parent].children.push(map[item.id]);
            }
        });
        return tree;
    }

    function createNode(node) {
        const div = document.createElement('div');
        div.className = 'node';
        div.innerHTML = `<strong>${node.name}</strong><br>${node.title}`;
        
        if (node.children.length > 0) {
            const childrenContainer = document.createElement('div');
            childrenContainer.className = 'children';
            node.children.forEach(child => {
                childrenContainer.appendChild(createNode(child));
            });
            div.appendChild(childrenContainer);
        }
        return div;
    }

    renderOrgChart(orgChartData);
});