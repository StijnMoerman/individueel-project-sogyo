package battleship.api;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.Random;


import jakarta.inject.Inject;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;
import jakarta.websocket.EncodeException;
import jakarta.websocket.OnClose;
import jakarta.websocket.OnError;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.CloseReason;
import jakarta.websocket.server.PathParam;
import jakarta.websocket.server.ServerEndpoint;




import battleship.api.models.*;
import battleship.domain.BattleshipImpl;
/* 
@Path("/start")
public class StartBattleship {
    @POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response initialize(
			@Context HttpServletRequest request, 
			StartInput startInput) {
        var battleship = new BattleshipImpl();
		String namePlayer = startInput.getNamePlayer();

		Random random = new Random();
		String gameID = random.ints(48, 123)
		.filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
		.limit(10)
		.collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
		.toString();

        HttpSession session = request.getSession(true);
        session.setAttribute(gameID +"-battleship", battleship);
        session.setAttribute(gameID +"-player1", namePlayer);
		session.setAttribute(gameID+"-endofsetup", false);

		var output = new Battleship(battleship, namePlayer, "",gameID,1);
		return Response.status(200).entity(output).build();
	}
}
*/

@ServerEndpoint(value = "/start")
public class StartBattleship {

    @OnMessage
    public Battleship start(StartInput startInput) {
        System.out.println("WebSocket on message");
        BattleshipImpl battleship = new BattleshipImpl();
		String namePlayer = startInput.getNamePlayer();

		Random random = new Random();
		String gameID = random.ints(48, 123)
		.filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
		.limit(10)
		.collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
		.toString();

		var output = new Battleship(battleship, namePlayer, "",gameID,1);
		return output;
    }

    @OnOpen
    public void helloOnOpen(Session session) {
        System.out.println("WebSocket opened: " + session.getId());
    }

    @OnClose
    public void helloOnClose(CloseReason reason) {
        System.out.println("WebSocket connection closed with CloseCode: " + reason.getCloseCode());
    }

	@OnError
	public void helloOnError(Session session, Throwable throwable) {
		throwable.printStackTrace();
	}
}