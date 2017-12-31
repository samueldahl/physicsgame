// module aliases
var Engine = Matter.Engine,
		Render = Matter.Render,
		World = Matter.World,
		Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
		element: document.body,
		engine: engine
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var boxC = Bodies.rectangle(500, -100, 80, 80);
var boxD = Bodies.rectangle(450, -250, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, {isStatic: true});

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, boxC, boxD, ground]);
Matter.Body.applyForce(boxA, {x: boxA.position.x, y: boxA.position.y}, {x: .0128, y: 0});
Matter.Body.applyForce(boxC, {x: boxC.position.x, y: boxC.position.y}, {x: -.01131, y: 0});
//Matter.Body.applyForce(ground, {x: 0, y: ground.position.y}, {x: 0, y: -2});

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
