import { Component, OnInit } from '@angular/core';


declare let draw2d:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'draw2d-angular';

  ngOnInit() {
    var canvas = new draw2d.Canvas("gfx_holder");
    // Create two standard nodes for "start" and "end" and link
    // this figures with a standard Connector
    //
    var start = new draw2d.shape.node.Start();
    var end = new draw2d.shape.node.End();

    canvas.add(start, 80, 180);
    canvas.add(end, 450, 250);

    // Add a connection via API calls between Start and Stop
    //
    var connection = new draw2d.Connection();
    connection.setSource(start.getOutputPort(0));
    connection.setTarget(end.getInputPort(0));
    canvas.add(connection);
  }

}
