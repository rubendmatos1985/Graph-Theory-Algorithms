// ORIGINAL EXAMPLE AND ALGORITHM EXTRACTED FROM CORMEN'S BOOK
// INTRODUCTION TO ALGORITHMS
//------------------------|
//  r -- s      t - -u    |
//  |    |    / |   / |   |
//  |    |  /   | /   |   |
//  v    w  - - x --  y   |
//________________________|
const graph={                                                        
  Adj : {                                                            
   r: [1, 4],                                                          
   s: [0, 5],                                                        
   t: [3,5,6],                                                       
   u: [2,6,7],
   v: [0],
   w: [1,2,6],
   x: [2,3,5,7],
   y: [3,6]
  },
  V: [ "r", "s", "t", "u", "v", "w", "x", "y"]
    .map( 
      v => ({ value: v, color: "white", distance: 0, parent: null })) 
};



// BFS:: (G:Graph, s:Vertex) -> void
let BFS = (G, s) =>{
  let Q = [];
  Q.push(s);
  while(Q.length > 0)
    {
      let u = Q.shift();
      G.Adj[u.value].forEach(
        index => {
            let v = G.V[index]; 
            if(v.color == "white"){
              v.color = "gray",
              v.distance = u.distance + 1,
              v.parent = u;
              Q.push(v);
            }
         })
      u.color = "black";
    
  }
}

BFS(graph, { value: "s", color: "gray", distance: 0, parent: null })




