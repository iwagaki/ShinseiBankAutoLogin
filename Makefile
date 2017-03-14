TARGET          = release.zip
SRC_DIR         = ShinseiBankAutoLogin

SRCS            = $(notdir $(shell find $(SRC_DIR) -name "*.js" -or -name "*.html" -or -name "*.json"))
TARGET_FILES    = $(SRCS)

$(info TARGET_FILES = $(TARGET_FILES))

.PHONY: all
all: $(TARGET)

.PHONY: clean
clean:
	rm -rf $(TARGET)

$(TARGET):
	cd $(SRC_DIR); zip ../$(TARGET) $(TARGET_FILES)
