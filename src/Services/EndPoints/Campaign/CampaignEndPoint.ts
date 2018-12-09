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

import BaseEndPoint from '../../../Core/BaseEndPoint';
import GetAllEndPointable from '../../../Core/GetAllEndPointable';
import GetEndPointable from '../../../Core/GetEndPointable';
import PostEndPointable from '../../../Core/PostEndPointable';
import PutEndPointable from '../../../Core/PutEndPointable';
import DeleteEndPointable from '../../../Core/DeleteEndPointable';

import Campaign from '../../../Models/Campaign';

class CampaignEndPoint extends BaseEndPoint {
    protected get Url(): string { return super.Url + "campaign/campaign"; }
}

export default GetAllEndPointable<Campaign[]>()(
    GetEndPointable<Campaign>()(
        PostEndPointable<Campaign>()(
            PutEndPointable<Campaign>()(
                DeleteEndPointable<Campaign>()(
                    CampaignEndPoint
                )
            )
        )
    )
);
