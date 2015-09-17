var _ = require('lodash');

function canShare(adventurers, gems) {
	var sum = _.sum(gems);
	var max = _.max(gems);

	return gems.length >= adventurers && max <= (sum / adventurers) && (sum % adventurers) == 0;
}

function swap(array, i, j)
{
	var x = array[i];

	array[i] = array[j];
	array[j] = x;
}

function permute(array, index, callback)
{
    if (index + 1 == array.length) {
       var playerLoots = callback(array);

		if (playerLoots != false)
			return playerLoots;
    }
    else
    {
        for (var j = index; j < array.length; j++)
        {
            swap(array, index, j);

            var playerLoots = permute(array, index+1, callback);

            if (playerLoots !== false)
            	return playerLoots;

            swap(array, index, j);
        }
    }

    return false;
} 

function share(adventurers, gems) {
	var playerLoots = permute(gems, 0, function (array) {
		var sum = _.sum(array);
		var avg = sum / adventurers;

		var playerLoots = [];
		var playerLoot = [];

		// For debug
		//console.log(array);

		var playerLootSum = 0;

		_.forEach(array, function (gem, i) {
			playerLootSum += gem;

			playerLoot.push(gem);

			if (playerLootSum == avg) {
				playerLoot.sort(function (a,b) { return a-b; });

				playerLoots.push(playerLoot);

				playerLoot = [];
				playerLootSum = 0;
			} else if (playerLootSum > avg) {
				return false;
			}
		});

		if (playerLoots.length == adventurers) {
			return playerLoots;
		}

		return false;
	});
	
	if (playerLoots !== false)
		return playerLoots;
	return [];
}

module.exports.canShare = canShare;
module.exports.share = share;
