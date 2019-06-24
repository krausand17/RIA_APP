import threading
import json
from time import sleep

from .tt_logger import ttl
from .tt_queue import*


class Tt_ProgramThread (threading.Thread):
	def __init__(self, state, pName = "def_prog"):
		threading.Thread.__init__(self)
		self.event = threading.Event()
		self.state = state
		self.pName = pName
	def run(self):
		ttl.info("Starting ProgThread")
		runProgram(self.state, self.pName, self.event)
		ttl.info("Exiting ProgThread")
		
def runProgram(state, pName, event):
	progJSON = None
	path = "./tt_progs/" + pName + ".json"
	try:		
		progFile = open(path, "r")
		progJSON = json.load(progFile)
	except IOError:
		ttl.error("couldn't open program file '{}'".format(path))
	
	if progJSON:
		tl = 0
		params = progJSON["params"]
		for i in range(1, len(params), 2):
			tl += params[i]
		print("p_name: ", progJSON["name"])
		print("p_diff: ", progJSON["difficultyLevel"])
		print("p_totL: ", tl, "sec")
		ttl.info("Selected Program: {}".format(progJSON["name"]))
		
		for i in range(0, len(params)-1, 2):
			if not event.is_set():
				queue_msg(state, params[i])
				ttl.debug("appended cmd: {}".format(params[i]))
				sleep(params[i+1])
			else:
				print("Aborted by User")
				ttl.info("Aborted by User")
				break
		
		print("Program ended")
		ttl.info("Program ended")

