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
import battleship.api.models.*;
import battleship.domain.BattleshipImpl;

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
		
        HttpSession session = request.getSession(true);
        session.setAttribute("battleship", battleship);
        session.setAttribute("player1", namePlayer);

		var output = new Battleship(battleship, namePlayer, "");
		return Response.status(200).entity(output).build();
	}
}
