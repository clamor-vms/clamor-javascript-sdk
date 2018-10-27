/*
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import mock from 'xhr-mock';

import { AuthContext } from "../../src/Core/AuthContext";
import { CampaignAboutService } from "../../src/Services/CampaignAboutService";
import { CampaignAbout } from "../../src/Models/CampaignAbout";


describe("CampaignAboutService", () => {
    //setup authContext
    let context: AuthContext = new AuthContext(
        "http://example.com",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyX2lkIjoxMn0.4VNZyedR2gTlXIR6Rwyn4VorSDhsgIXqZkCgehwpzf4"
    );
    //Setup service
    let service = new CampaignAboutService(context);

    // replace the real XHR object with the mock XHR object before each test
    beforeEach(() => mock.setup());
    // put the real XHR object back and clear the mocks after each test
    afterEach(() => mock.teardown());

    it("Get Request Should Return Service Name Populated Into Our Response Object", (done) => {
        //Setup mock response
        mock.get('http://example.com/campaign/about', {
            status: 200,
            reason: 'Created',
            body: '{"Name": "Clamor Campaign Service"}'
        });

        service.GetCampaignServiceInfo().then((x: CampaignAbout) => {
            expect(x.Name).toEqual("Clamor Campaign Service");

            done();
        });
    });
});
