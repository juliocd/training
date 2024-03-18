/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let bTree = new TreeNode(postorder[postorder.length - 1]);

    const buildTree = (lp, rp, li, ri, root, tree) => {
        if(lp >= rp || !tree) {
            return;
        }
        
        const rootIdx = inorder.indexOf(root);
        
        const ll = rootIdx - li;
        const lr = ri - rootIdx;
        
        const lRoot = postorder[lp + ll -1];
        const rRoot = postorder[rp - 1];
        
        if(ll > 0) tree.left = new TreeNode(lRoot);
        if(lr > 0) tree.right = new TreeNode(rRoot);
        
        buildTree(lp, lp + ll - 1, li, rootIdx -1, lRoot, tree.left)
        buildTree(lp + ll, rp - 1, rootIdx + 1, ri, rRoot, tree.right)
    }
    
    buildTree(0, inorder.length - 1, 0, inorder.length - 1, postorder[postorder.length - 1], bTree)
    
    return bTree;
};